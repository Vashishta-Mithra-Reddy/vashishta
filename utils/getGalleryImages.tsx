import { supabase } from './supabase'; 

export async function getGalleryImages(bucketName: string) {

  const { data: files, error } = await supabase.storage.from(bucketName).list('', { limit: 1000 });

  if (error) {
    console.error('Error fetching files:', error);
    return [];
  }

  if (!files || files.length === 0) {
    console.log('No files found in the bucket.');
    return [];
  }

  const imageUrls = files.map((file) => {
    const { data: { publicUrl } } = supabase.storage.from(bucketName).getPublicUrl(file.name);
    return publicUrl;
  });

  return imageUrls;
}
