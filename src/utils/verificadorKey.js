

export async function getVideos(videoId) {
    try {
        const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${videoId}'+in+parents+and+mimeType+contains+'video/'&key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE_DRIVE}&fields=files(id,name)`);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        return data.files; 
    } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        throw error; 
    }
}
