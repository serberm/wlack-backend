import * as express from 'express'
const { run } = require('../scripts/helpers')
import { PrismaClient } from '@prisma/client'
import { MultiTenant } from 'prisma-multi-tenant'

export const createTenant = async (req: any, res: any, next: any) => {
  
  const name = req.body.tenantName
  const username = req.body.username
  const fullname = req.body.fullname
  const description = req.body.description
  const image = req.body.image
  const email = req.body.email
  try {
    // Create new tenant
    await run(
      `prisma-multi-tenant new --name=${name} --provider=postgresql
      --url=${process.env.DATABASE_URL}?schema=${name}`
    )
    await run(`prisma-multi-tenant env ${name} -- prisma2 migrate save --experimental`)
    await run(`prisma-multi-tenant migrate ${name} up -- --auto-approve`)
  } catch (err) {}

  try {
    const multiTenant = new MultiTenant<PrismaClient>();
    const prisma = await multiTenant.get(name)


    await prisma.user.create({
      data: {
        username,
        bio: '',
        fullname,
        image,
        email,
        password: '',
        owner: '1',
        social: 'twitter',
        role: {
          create: [
            {
              title: 'Admin',
              roleSettings:
                'manage_community,manage_channel,manage_role,chat_permission,upload_image,post_links,delete_message',
              color: '#9B59B6'
            },
            {
              title: 'Manager',
              roleSettings:
                'manage_community,manage_channel,chat_permission,upload_image,post_links,delete_message',
              color: '#3398DB'
            },
            {
              title: 'Member',
              roleSettings:
                'manage_community,manage_channel,chat_permission,upload_image,post_links',
              color: '#2FCC71'
            }
          ]
        }
      }
    })

    await prisma.community.create({
      data: {
        name: 'General',
        url: 'general',
        image: 'http://ec2-3-20-204-242.us-east-2.compute.amazonaws.com:3000/favicon.svg',
        description,
        channels: {
          create: [
            {
              name: 'general',
              description: 'Talk on a general topic',
              url: `general/general`,
              author: { connect: { username } },
            }
          ]
        },
        author: { connect: { username } },
        members: { connect: { username } }
      }
    })

    await prisma.community.create({
      data: {
        name: 'Private',
        url: 'direct',
        image: 'https://wlack.com/image/article/1566410146060channel6.png',
        description,
        channels: {
          create: [
            {
              name: 'general',
              description: 'Talk on a general topic',
              url: `direct/general`,
              author: { connect: { username } },
            }
          ]
        },
        author: { connect: { username } },
        members: { connect: { username } }
      }
    })

    await multiTenant.disconnect()
    res.status(201).json({ success: true })
  } catch (err) {
    next(err)
  }
}

export const deleteTenant = async (req: any, res: any, next: any) => {
  try {
    const name = req.body.tenantName

    const multiTenant = new MultiTenant()
    await multiTenant.deleteTenant(name)

    await multiTenant.disconnect()
  } catch (err) {
    next(err)
  }
}

const router = express.Router()

router.post('/', createTenant)
router.delete('/', deleteTenant)

export default router
