import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
  audioUploader: f({ audio: { maxFileSize: '4MB' } })
    .middleware(async ({ req }) => {
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
