import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data';
export default async function imgKit(base64: string, filename: string) {
  const form = new FormData();
  form.append('file', base64);
  form.append('fileName', filename);
  const privKey = Buffer.from(
    `${process.env.PRIVATE_API_IMG_KIT}:`,
    'utf-8'
  ).toString('base64');
  const imgKitURL = process.env.IMGKIT as string;
  const response: AxiosResponse<{ url: string }> = await axios.post(
    imgKitURL,
    form,
    {
      headers: {
        // ...form.getHeaders(),
        Authorization: `Basic ${privKey}`,
      },
    }
  );

  return response.data.url;
  // req.body.image = response.data.url;
}
