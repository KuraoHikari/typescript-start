import { NextApiRequest, NextApiResponse } from 'next';

import serverAuth from '@/libs/serverAuth';
import prisma from '@/libs/prismadb';
import { isBase64Image, isImageKit } from '@/utils/imageValidation';
import imgKit from '@/utils/imageKit';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PATCH') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req);

    let { name, username, bio, profileImage, coverImage } = req.body;

    if (!name || !username) {
      throw new Error('Missing fields');
    }

    if (coverImage && !isImageKit(coverImage)) {
      const isValid = isBase64Image(coverImage);
      if (!isValid) {
        throw new Error('Missing fields');
      }
      const coverUpload = await imgKit(coverImage, `coverImage${username}`);
      coverImage = coverUpload;
    }

    if (profileImage && !isImageKit(profileImage)) {
      const isValid = isBase64Image(profileImage);
      if (!isValid) {
        throw new Error('Missing fields');
      }

      const profileUpload = await imgKit(
        profileImage,
        `profileImage${username}`
      );
      profileImage = profileUpload;
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
