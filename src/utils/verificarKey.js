import axios from 'axios';
import { notFound } from 'next/navigation';

export const verificarKey = async (folderId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/drive/v3/files/${folderId}?key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE_DRIVE}`,
      {
        params: {
          fields: "id, name, mimeType" // Obtém apenas campos essenciais
        }
      }
    );

    // Verifica se o item retornado é uma pasta
    if (response.data.mimeType === 'application/vnd.google-apps.folder') {
      return true;  // O folderId é válido e representa uma pasta
    } else {
      return false; // O folderId é válido, mas não é uma pasta
    }

  } catch (error) {
    console.error('Erro ao verificar a existência da pasta:', error);
    return false;  // Retorna false se houver erro (pasta não encontrada ou acesso negado)
  }
};
