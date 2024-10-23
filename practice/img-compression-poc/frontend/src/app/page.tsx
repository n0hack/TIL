'use client';

import { useState } from 'react';
import imageCompression, { Options } from 'browser-image-compression';
import NextImage from 'next/image';

function convertImageToWebp(file: Blob): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to convert image to webp'));
        },
        'image/webp',
        0.7,
      );
    };
  });
}

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [compressedFiles, setCompressedFiles] = useState<Blob[]>([]);
  const [processing, setProcessing] = useState(false);
  const [paths, setPaths] = useState<string[]>([]);
  const [compressedPaths, setCompressedPaths] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setSelectedFiles(Array.from(files));
    const paths = Array.from(files).map((file) => URL.createObjectURL(file));
    setPaths(paths);
    setCompressedPaths([]);
    setCompressedFiles([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleProcess = async () => {
    const compressedFiles = [];
    const compressedPaths = [];
    for (const file of selectedFiles) {
      const compressedFile = await convertImageToWebp(file);
      console.log(compressedFile);
      compressedFiles.push(compressedFile);
      compressedPaths.push(URL.createObjectURL(compressedFile));
    }
    setCompressedFiles(compressedFiles);
    setCompressedPaths(compressedPaths);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">dd</label>
        <input type="file" multiple onChange={handleFileChange} />
        <button type="submit" disabled={processing}>
          Submit
        </button>
      </form>
      <button onClick={handleProcess}>이미지 처리</button>
      <section>
        <h2>변환 전</h2>
        <div className="flex overflow-hidden">
          <div className="flex overflow-scroll">
            {paths.map((path, index) => (
              <div key={path}>
                <NextImage src={path} alt="test" width={0} height={0} className="w-[800px] h-auto" />
                <p>
                  {selectedFiles[index].name} ({selectedFiles[index].size.toLocaleString()})
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h2>변환 후</h2>
        <div className="flex overflow-hidden">
          <div className="flex overflow-scroll">
            {compressedPaths.map((path, index) => (
              <div key={path}>
                <NextImage src={path} alt="test" width={0} height={0} className="w-[800px] h-auto" />
                <p>
                  {selectedFiles[index].name} ({compressedFiles[index].size.toLocaleString()})
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
