import axios from 'axios';

const ACCESS_TOKEN = 'IGQWRPWmhpc01ZAaDZAhVmEwYTBOLUxLTUZAvQlBvV2dKd2tsQlZAWUlk4OUEwb0ZATclNRRmhkUlVNd3lEMDBnZAnNzelRFOEphSHAzZAzZAZAcVJkX2xzY2U5YjcxZA0FodnNYOEhxeFc3TTRXRmYxMUpKM2N0bE5MbUM3MU0ZD'; // Replace with your Instagram Graph API access token
const BASE_URL = 'https://graph.instagram.com';

export const getUserImages = async (): Promise<any[]> => {
    try {
        // Fetch user media
        const response = await axios.get(`${BASE_URL}/me/media`, {
            params: {
                fields: 'id,caption,media_type,media_url,timestamp',
                access_token: ACCESS_TOKEN,
            },
        });

        // Filter media to include only images
        const images = response.data.data.filter((media: any) => media.media_type === 'IMAGE');

        return images;
    } catch (error) {
        console.error('Error fetching Instagram images:', error);
        throw error;
    }
};
