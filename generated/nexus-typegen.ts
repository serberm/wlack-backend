/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as ctx from "../src/types"
import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ChannelInfoWhereUniqueInput: { // input type
    id?: string | null; // String
    uniqueUserChannelPair?: string | null; // String
  }
  FileWhereUniqueInput: { // input type
    id?: string | null; // String
    Key?: string | null; // String
  }
  NotificationWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  ReplyMessageWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
    username?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Channel: prisma.Channel;
  ChannelInfo: prisma.ChannelInfo;
  Community: prisma.Community;
  Count: { // root type
    count: number; // Int!
  }
  File: prisma.File;
  Message: prisma.Message;
  Mutation: {};
  Notification: prisma.Notification;
  OnlinePayload: { // root type
    id: string; // String!
    isOnline: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Query: {};
  Reaction: prisma.Reaction;
  RemoteAttachment: prisma.RemoteAttachment;
  ReplyMessage: prisma.ReplyMessage;
  Role: prisma.Role;
  Subscription: { // root type
    channelNewMessage: NexusGenRootTypes['Channel']; // Channel!
    deleteMessage?: NexusGenRootTypes['Message'] | null; // Message
    editMessage?: NexusGenRootTypes['Message'] | null; // Message
    newNotification: NexusGenRootTypes['Notification']; // Notification!
    newReaction?: NexusGenRootTypes['Reaction'] | null; // Reaction
    removedReaction?: NexusGenRootTypes['Reaction'] | null; // Reaction
    updatedReaction?: NexusGenRootTypes['Reaction'] | null; // Reaction
    userTypingStatus?: NexusGenRootTypes['TypingStatus'] | null; // TypingStatus
  }
  TwitterPayload: { // root type
    bio: string; // String!
    followers: string; // String!
    followings: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  TypingStatus: { // root type
    isTyping: boolean; // Boolean!
    username: string; // String!
  }
  UnreadMessagePayload: { // root type
    fromNewUser: boolean; // Boolean!
    messages: NexusGenRootTypes['Message'][]; // [Message!]!
    user: NexusGenRootTypes['User']; // User!
  }
  User: prisma.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
  Upload: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ChannelInfoWhereUniqueInput: NexusGenInputs['ChannelInfoWhereUniqueInput'];
  FileWhereUniqueInput: NexusGenInputs['FileWhereUniqueInput'];
  NotificationWhereUniqueInput: NexusGenInputs['NotificationWhereUniqueInput'];
  ReplyMessageWhereUniqueInput: NexusGenInputs['ReplyMessageWhereUniqueInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Channel: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    community: NexusGenRootTypes['Community']; // Community!
    createdAt: any; // DateTime!
    description: string | null; // String
    id: string; // String!
    isPrivate: boolean; // Boolean!
    messages: NexusGenRootTypes['Message'][]; // [Message!]!
    name: string; // String!
    notifications: NexusGenRootTypes['Notification'][]; // [Notification!]!
    typingUsers: NexusGenRootTypes['User'][]; // [User!]!
    url: string; // String!
    userData: NexusGenRootTypes['ChannelInfo'][]; // [ChannelInfo!]!
  }
  ChannelInfo: { // field return type
    channel: NexusGenRootTypes['Channel']; // Channel!
    id: string; // String!
    lastUpdateAt: any; // DateTime!
    uniqueUserChannelPair: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Community: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    channels: NexusGenRootTypes['Channel'][]; // [Channel!]!
    description: string | null; // String
    id: string; // String!
    image: string | null; // String
    isPrivate: boolean; // Boolean!
    members: NexusGenRootTypes['User'][]; // [User!]!
    name: string; // String!
    notifications: NexusGenRootTypes['Notification'][]; // [Notification!]!
    url: string; // String!
  }
  Count: { // field return type
    count: number; // Int!
  }
  File: { // field return type
    encoding: string; // String!
    filename: string; // String!
    filesize: string | null; // String
    id: string; // String!
    Key: string; // String!
    message: NexusGenRootTypes['Message'] | null; // Message
    mimetype: string; // String!
    uploader: NexusGenRootTypes['User']; // User!
  }
  Message: { // field return type
    attachments: NexusGenRootTypes['File'][]; // [File!]!
    author: NexusGenRootTypes['User']; // User!
    body: string | null; // String
    channel: NexusGenRootTypes['Channel'] | null; // Channel
    children: NexusGenRootTypes['ReplyMessage'][]; // [ReplyMessage!]!
    createdAt: any; // DateTime!
    id: string; // String!
    reactions: NexusGenRootTypes['Reaction'][]; // [Reaction!]!
    remoteAttachments: NexusGenRootTypes['RemoteAttachment'][]; // [RemoteAttachment!]!
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    attachRoleToUser: NexusGenRootTypes['User']; // User!
    createChannel: NexusGenRootTypes['Channel']; // Channel!
    createCommunity: NexusGenRootTypes['Community']; // Community!
    createRole: NexusGenRootTypes['Role']; // Role!
    deattachRoleToUser: NexusGenRootTypes['User']; // User!
    deleteFile: string; // String!
    deleteMessage: NexusGenRootTypes['Message']; // Message!
    deleteReplyMessage: NexusGenRootTypes['ReplyMessage']; // ReplyMessage!
    deleteRole: NexusGenRootTypes['Role']; // Role!
    editChannel: NexusGenRootTypes['Channel']; // Channel!
    editMessage: NexusGenRootTypes['Message']; // Message!
    editReplyMessage: NexusGenRootTypes['ReplyMessage']; // ReplyMessage!
    followCommunity: NexusGenRootTypes['Community']; // Community!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    logout: NexusGenRootTypes['User']; // User!
    markChannelNotificationsAsRead: NexusGenRootTypes['Notification']; // Notification!
    markCommunityNotificationsAsRead: NexusGenRootTypes['Notification']; // Notification!
    markNotificationAsRead: NexusGenRootTypes['Count']; // Count!
    markNotificationsAsRead: NexusGenRootTypes['Count']; // Count!
    replyMessage: NexusGenRootTypes['ReplyMessage']; // ReplyMessage!
    searchMessages: NexusGenRootTypes['Message'][]; // [Message!]!
    sendMessage: NexusGenRootTypes['Message']; // Message!
    sendNotification: NexusGenRootTypes['Notification']; // Notification!
    setCurrentChannel: NexusGenRootTypes['User']; // User!
    setUserTypingStatus: NexusGenRootTypes['TypingStatus']; // TypingStatus!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    toggleReaction: NexusGenRootTypes['Reaction']; // Reaction!
    unfollowCommunity: NexusGenRootTypes['Community']; // Community!
    updateChannelInfo: NexusGenRootTypes['User']; // User!
    updateRole: NexusGenRootTypes['Role']; // Role!
    updateUser: NexusGenRootTypes['User']; // User!
    uploadFile: NexusGenRootTypes['File']; // File!
    uploadFiles: NexusGenRootTypes['File'][]; // [File!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Notification: { // field return type
    action: string | null; // String
    body: string | null; // String
    channel: NexusGenRootTypes['Channel'] | null; // Channel
    community: NexusGenRootTypes['Community'] | null; // Community
    createdAt: any; // DateTime!
    id: string; // String!
    isRead: boolean; // Boolean!
    message: NexusGenRootTypes['Message'] | null; // Message
    receiver: NexusGenRootTypes['User']; // User!
    sender: NexusGenRootTypes['User']; // User!
    type: string | null; // String
  }
  OnlinePayload: { // field return type
    id: string; // String!
    isOnline: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    allMessages: NexusGenRootTypes['Message'][]; // [Message!]!
    channel: NexusGenRootTypes['Channel'] | null; // Channel
    channelNotifications: NexusGenRootTypes['Notification'][]; // [Notification!]!
    channels: NexusGenRootTypes['Channel'][]; // [Channel!]!
    communities: NexusGenRootTypes['Community'][]; // [Community!]!
    community: NexusGenRootTypes['Community'] | null; // Community
    communityNotifications: NexusGenRootTypes['Notification'][]; // [Notification!]!
    files: NexusGenRootTypes['File'][]; // [File!]!
    getLastMessages: NexusGenRootTypes['Message'][]; // [Message!]!
    getNextMessages: NexusGenRootTypes['Message'][]; // [Message!]!
    getPrevMessages: NexusGenRootTypes['Message'][]; // [Message!]!
    getUnreadMessagesCount: NexusGenRootTypes['UnreadMessagePayload']; // UnreadMessagePayload!
    getUser: NexusGenRootTypes['TwitterPayload']; // TwitterPayload!
    me: NexusGenRootTypes['User']; // User!
    messageReplies: NexusGenRootTypes['ReplyMessage'][]; // [ReplyMessage!]!
    notifications: NexusGenRootTypes['Notification'][]; // [Notification!]!
    privateChannels: NexusGenRootTypes['Channel'][]; // [Channel!]!
    reactions: NexusGenRootTypes['Reaction'][]; // [Reaction!]!
    replyMessages: NexusGenRootTypes['Message'][]; // [Message!]!
    roles: NexusGenRootTypes['Role'][]; // [Role!]!
    searchCommunities: NexusGenRootTypes['Community'][]; // [Community!]!
    searchMessages: NexusGenRootTypes['Message'][]; // [Message!]!
    unreadNotifications: NexusGenRootTypes['Notification'][]; // [Notification!]!
    userFiles: NexusGenRootTypes['File'][]; // [File!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Reaction: { // field return type
    createdAt: any; // DateTime!
    id: string; // String!
    message: NexusGenRootTypes['Message']; // Message!
    name: string; // String!
    updatedAt: any; // DateTime!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  RemoteAttachment: { // field return type
    description: string | null; // String
    id: string; // String!
    parentMessage: NexusGenRootTypes['Message'] | null; // Message
    parentReplyMessage: NexusGenRootTypes['ReplyMessage'] | null; // ReplyMessage
    preview: string | null; // String
    siteName: string | null; // String
    title: string; // String!
    url: string; // String!
    videoLink: string | null; // String
  }
  ReplyMessage: { // field return type
    attachments: NexusGenRootTypes['File'][]; // [File!]!
    author: NexusGenRootTypes['User']; // User!
    body: string; // String!
    createdAt: any; // DateTime!
    id: string; // String!
    parent: NexusGenRootTypes['Message']; // Message!
    remoteAttachments: NexusGenRootTypes['RemoteAttachment'][]; // [RemoteAttachment!]!
    updatedAt: any; // DateTime!
  }
  Role: { // field return type
    color: string; // String!
    createdAt: any; // DateTime!
    id: string; // String!
    roleSettings: string; // String!
    title: string; // String!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Subscription: { // field return type
    channelNewMessage: NexusGenRootTypes['Channel']; // Channel!
    deleteMessage: NexusGenRootTypes['Message'] | null; // Message
    editMessage: NexusGenRootTypes['Message'] | null; // Message
    newMessage: NexusGenRootTypes['Message']; // Message!
    newNotification: NexusGenRootTypes['Notification']; // Notification!
    newReaction: NexusGenRootTypes['Reaction'] | null; // Reaction
    removedReaction: NexusGenRootTypes['Reaction'] | null; // Reaction
    updatedReaction: NexusGenRootTypes['Reaction'] | null; // Reaction
    userTypingStatus: NexusGenRootTypes['TypingStatus'] | null; // TypingStatus
    userWentOffline: NexusGenRootTypes['User'] | null; // User
    userWentOnline: NexusGenRootTypes['User'] | null; // User
  }
  TwitterPayload: { // field return type
    bio: string; // String!
    followers: string; // String!
    followings: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  TypingStatus: { // field return type
    isTyping: boolean; // Boolean!
    username: string; // String!
  }
  UnreadMessagePayload: { // field return type
    fromNewUser: boolean; // Boolean!
    messages: NexusGenRootTypes['Message'][]; // [Message!]!
    user: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    bio: string | null; // String
    channelsInfo: NexusGenRootTypes['ChannelInfo'][]; // [ChannelInfo!]!
    communitiesFollowed: NexusGenRootTypes['Community'][]; // [Community!]!
    communitiesOwned: NexusGenRootTypes['Community'][]; // [Community!]!
    currentChannel: NexusGenRootTypes['Channel'] | null; // Channel
    email: string | null; // String
    files: NexusGenRootTypes['File'][]; // [File!]!
    fullname: string; // String!
    id: string; // String!
    image: string | null; // String
    isOnline: boolean; // Boolean!
    messages: NexusGenRootTypes['Message'][]; // [Message!]!
    notificationsReceived: NexusGenRootTypes['Notification'][]; // [Notification!]!
    notificationsSend: NexusGenRootTypes['Notification'][]; // [Notification!]!
    owner: string | null; // String
    password: string | null; // String
    reactions: NexusGenRootTypes['Reaction'][]; // [Reaction!]!
    replyMessages: NexusGenRootTypes['ReplyMessage'][]; // [ReplyMessage!]!
    role: NexusGenRootTypes['Role'][]; // [Role!]!
    social: string | null; // String
    username: string; // String!
  }
}

export interface NexusGenArgTypes {
  Channel: {
    typingUsers: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    userData: { // args
      after?: NexusGenInputs['ChannelInfoWhereUniqueInput'] | null; // ChannelInfoWhereUniqueInput
      before?: NexusGenInputs['ChannelInfoWhereUniqueInput'] | null; // ChannelInfoWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Mutation: {
    attachRoleToUser: { // args
      roleId: string; // String!
      userId: string; // String!
    }
    createChannel: { // args
      communityUrl?: string | null; // String
      description?: string | null; // String
      isPrivate?: boolean | null; // Boolean
      name?: string | null; // String
      url?: string | null; // String
    }
    createCommunity: { // args
      description?: string | null; // String
      image?: string | null; // String
      isPrivate?: boolean | null; // Boolean
      name?: string | null; // String
      url?: string | null; // String
    }
    createRole: { // args
      color?: string | null; // String
      roleSettings?: string | null; // String
      title?: string | null; // String
    }
    deattachRoleToUser: { // args
      roleId: string; // String!
      userId: string; // String!
    }
    deleteFile: { // args
      Key?: string | null; // String
    }
    deleteMessage: { // args
      messageId?: string | null; // String
    }
    deleteReplyMessage: { // args
      messageId?: string | null; // String
    }
    deleteRole: { // args
      id?: string | null; // String
    }
    editChannel: { // args
      channelId?: string | null; // String
      description?: string | null; // String
      name?: string | null; // String
    }
    editMessage: { // args
      body?: string | null; // String
      messageId?: string | null; // String
    }
    editReplyMessage: { // args
      body?: string | null; // String
      messageId?: string | null; // String
    }
    followCommunity: { // args
      url?: string | null; // String
    }
    login: { // args
      email: string; // String!
      password: string; // String!
      social: string; // String!
    }
    markChannelNotificationsAsRead: { // args
      channelUrl?: string | null; // String
    }
    markCommunityNotificationsAsRead: { // args
      communityUrl?: string | null; // String
    }
    markNotificationAsRead: { // args
      id?: string | null; // String
    }
    markNotificationsAsRead: { // args
      type?: string | null; // String
    }
    replyMessage: { // args
      attachments?: string[] | null; // [String!]
      body?: string | null; // String
      parentId?: string | null; // String
      urlList?: string[] | null; // [String!]
    }
    searchMessages: { // args
      channelUrl?: string | null; // String
      searchQuery?: string | null; // String
    }
    sendMessage: { // args
      attachments?: string[] | null; // [String!]
      body?: string | null; // String
      channelUrl?: string | null; // String
      communityUrl?: string | null; // String
      mentions?: string[] | null; // [String!]
      urlList?: string[] | null; // [String!]
    }
    sendNotification: { // args
      channelUrl?: string | null; // String
      communityUrl?: string | null; // String
      messageId?: string | null; // ID
      receiverName?: string | null; // String
      type?: string | null; // String
    }
    setCurrentChannel: { // args
      channelUrl?: string | null; // String
    }
    setUserTypingStatus: { // args
      channelUrl?: string | null; // String
      isTyping?: boolean | null; // Boolean
    }
    signup: { // args
      bio?: string | null; // String
      email: string; // String!
      fullname: string; // String!
      password: string; // String!
      username: string; // String!
    }
    toggleReaction: { // args
      messageId?: string | null; // String
      name?: string | null; // String
    }
    unfollowCommunity: { // args
      url?: string | null; // String
    }
    updateChannelInfo: { // args
      channelUrl: string; // String!
      date: string; // String!
    }
    updateRole: { // args
      color?: string | null; // String
      id?: string | null; // String
      roleSettings?: string | null; // String
      title?: string | null; // String
    }
    updateUser: { // args
      email: string; // String!
      fullname: string; // String!
      image?: string | null; // String
      username: string; // String!
    }
    uploadFile: { // args
      file?: any | null; // Upload
    }
    uploadFiles: { // args
      files: any[]; // [Upload!]!
    }
    users: { // args
      searchString?: string | null; // String
    }
  }
  Query: {
    allMessages: { // args
      channelUrl?: string | null; // String
    }
    channel: { // args
      url?: string | null; // String
    }
    channelNotifications: { // args
      channelUrl?: string | null; // String
    }
    channels: { // args
      communityUrl?: string | null; // String
    }
    community: { // args
      id?: string | null; // ID
      url?: string | null; // String
    }
    communityNotifications: { // args
      communityUrl?: string | null; // String
    }
    files: { // args
      after?: string | null; // ID
    }
    getLastMessages: { // args
      channelUrl?: string | null; // String
      cursorId?: string | null; // ID
      lastVisitDate?: string | null; // String
      number?: string | null; // String
    }
    getNextMessages: { // args
      channelUrl?: string | null; // String
      cursorId?: string | null; // ID
      number?: string | null; // String
    }
    getPrevMessages: { // args
      channelUrl?: string | null; // String
      cursorId?: string | null; // ID
      number?: string | null; // String
    }
    getUnreadMessagesCount: { // args
      channelUrl?: string | null; // String
      username?: string | null; // String
    }
    getUser: { // args
      username: string; // String!
    }
    messageReplies: { // args
      after?: string | null; // ID
      messageId?: string | null; // String
    }
    reactions: { // args
      messageId?: string | null; // String
    }
    replyMessages: { // args
      after?: string | null; // ID
      channelUrl?: string | null; // String
    }
    searchCommunities: { // args
      searchString?: string | null; // String
    }
    searchMessages: { // args
      channelUrl?: string | null; // String
      searchQuery?: string | null; // String
    }
    userFiles: { // args
      after?: string | null; // ID
      userId?: string | null; // ID
    }
    users: { // args
      searchString?: string | null; // String
    }
  }
  ReplyMessage: {
    attachments: { // args
      after?: NexusGenInputs['FileWhereUniqueInput'] | null; // FileWhereUniqueInput
      before?: NexusGenInputs['FileWhereUniqueInput'] | null; // FileWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Role: {
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Subscription: {
    channelNewMessage: { // args
      communityUrl?: string | null; // String
      tenant?: string | null; // String
    }
    deleteMessage: { // args
      channelUrl?: string | null; // String
      tenant?: string | null; // String
    }
    editMessage: { // args
      channelUrl?: string | null; // String
      tenant?: string | null; // String
    }
    newMessage: { // args
      channelUrl?: string | null; // String
      tenant?: string | null; // String
    }
    newNotification: { // args
      receiverId?: string | null; // String
      tenant?: string | null; // String
    }
    newReaction: { // args
      channelUrl?: string | null; // String
      tenant?: string | null; // String
    }
    removedReaction: { // args
      channelUrl?: string | null; // String
      tenant?: string | null; // String
    }
    updatedReaction: { // args
      channelUrl?: string | null; // String
      tenant?: string | null; // String
    }
    userTypingStatus: { // args
      channelUrl?: string | null; // String
      tenant?: string | null; // String
      username?: string | null; // String
    }
    userWentOffline: { // args
      tenant?: string | null; // String
    }
    userWentOnline: { // args
      tenant?: string | null; // String
    }
  }
  User: {
    notificationsReceived: { // args
      after?: NexusGenInputs['NotificationWhereUniqueInput'] | null; // NotificationWhereUniqueInput
      before?: NexusGenInputs['NotificationWhereUniqueInput'] | null; // NotificationWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    notificationsSend: { // args
      after?: NexusGenInputs['NotificationWhereUniqueInput'] | null; // NotificationWhereUniqueInput
      before?: NexusGenInputs['NotificationWhereUniqueInput'] | null; // NotificationWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    replyMessages: { // args
      after?: NexusGenInputs['ReplyMessageWhereUniqueInput'] | null; // ReplyMessageWhereUniqueInput
      before?: NexusGenInputs['ReplyMessageWhereUniqueInput'] | null; // ReplyMessageWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "Channel" | "ChannelInfo" | "Community" | "Count" | "File" | "Message" | "Mutation" | "Notification" | "OnlinePayload" | "Query" | "Reaction" | "RemoteAttachment" | "ReplyMessage" | "Role" | "Subscription" | "TwitterPayload" | "TypingStatus" | "UnreadMessagePayload" | "User";

export type NexusGenInputNames = "ChannelInfoWhereUniqueInput" | "FileWhereUniqueInput" | "NotificationWhereUniqueInput" | "ReplyMessageWhereUniqueInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String" | "Upload";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}