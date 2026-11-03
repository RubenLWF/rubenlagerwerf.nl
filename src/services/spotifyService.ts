const NOW_PLAYING_ENDPOINT = `${import.meta.env.PUBLIC_VERCEL_API_BASE}/now-playing`;

export interface SpotifyTrack {
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
}

export const getCurrentlyPlaying = async (): Promise<SpotifyTrack | null> => {
    const response = await fetch(NOW_PLAYING_ENDPOINT);

    if (response.status === 204) {
        return null; // Nothing currently playing
    }

    if (!response.ok) {
        throw new Error(`Failed to fetch currently playing: ${response.status}`);
    }

    return response.json();
};
