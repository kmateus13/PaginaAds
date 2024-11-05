import axios from 'axios';


export const listarSubpastas = async (folderId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE_DRIVE}`
    );

    const subfolders = response.data.files;

    
    return subfolders;
  } catch (error) {
    console.error('Erro ao listar subpastas:', error);
    throw error; 
  }
};
