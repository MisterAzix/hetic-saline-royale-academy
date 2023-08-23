import 'multer';
import { Injectable } from '@nestjs/common';
import {
  UploadApiErrorResponse,
  UploadApiOptions,
  UploadApiResponse,
  v2,
} from 'cloudinary';
import * as process from 'process';

@Injectable()
export class CloudinaryService {
  async uploadAsset(
    file: Express.Multer.File,
    path = ''
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    const options: UploadApiOptions = {
      folder: `${process.env.CLOUDINARY_FOLDER}/${path}`,
      resource_type: 'auto',
    };

    return new Promise((resolve, reject) => {
      v2.uploader
        .upload_stream(options, (error, result) => {
          if (error) return reject(error);
          resolve(result);
        })
        .end(file.buffer);
    });
  }

  async getVideoThumbnail(
    public_id: string,
    options: { width?: number; height?: number } = {}
  ): Promise<string> {
    const { width = 1920, height = 1080 } = options;
    return v2.utils.video_thumbnail_url(public_id, {
      width,
      height,
    });
  }
}
