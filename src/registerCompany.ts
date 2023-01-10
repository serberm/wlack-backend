import * as express from 'express'
import { hash } from 'bcryptjs'
import { context } from './context'

export const createTenant = async (req: any, res: any, next: any) => {

  const username = req.body.username
  const password = req.body.password
  const fullname = req.body.fullname
  const description = req.body.description
  const image = req.body.image
  const email = req.body.email

  try {
    const prisma = context.prisma;

    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
      data: {
        username,
        bio: 'Admin',
        fullname,
        image,
        email,
        password: hashedPassword,
        owner: '1',
        social: '',
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
        image: 'https://vectorified.com/images/favicon-ico-21.png',
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
        image: 'https://vectorified.com/images/favicon-ico-30.png',
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

    res.status(201).json({ success: true })
  } catch (err) {
    next(err)
  }
}

export const deleteTenant = async (req: any, res: any, next: any) => {
  try {
    const name = req.body.tenantName
  } catch (err) {
    next(err)
  }
}

const router = express.Router()

router.post('/', createTenant)
router.delete('/', deleteTenant)

export default router
