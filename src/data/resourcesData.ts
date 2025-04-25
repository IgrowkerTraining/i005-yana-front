import avatarMedit1 from '../assets/resources/avatar_medit1.webp';
import avatarMedit2 from '../assets/resources/avatar_medit2.webp';
import avatarMedit3 from '../assets/resources/avatar_medit3.webp';
import avatarMedit4 from '../assets/resources/avatar_medit4.webp';
import imgMedit1 from '../assets/resources/img_medit1.webp';
import imgMedit2 from '../assets/resources/img_medit2.webp';
import imgMedit3 from '../assets/resources/img_medit3.webp';
import imgMedit4 from '../assets/resources/img_medit4.webp';

import avatarPodcast1 from '../assets/resources/avatarPodcast1.webp';
import avatarPodcast2 from '../assets/resources/avatarPodcast2.webp';
import avatarPodcast3 from '../assets/resources/avatarPodcast3.webp';
import avatarPodcast4 from '../assets/resources/avatarPodcast4.webp';
import avatarPodcast5 from '../assets/resources/avatarPodcast5.webp';
import avatarPodcast6 from '../assets/resources/avatarPodcast6.webp';
import avatarPodcast7 from '../assets/resources/avatarPodcast7.webp';
import imgPodcast1 from '../assets/resources/imgPodcast1.webp';
import imgPodcast2 from '../assets/resources/imgPodcast2.webp';
import imgPodcast3 from '../assets/resources/imgPodcast3.webp';
import imgPodcast4 from '../assets/resources/imgPodcast4.webp';
import imgPodcast5 from '../assets/resources/imgPodcast5.webp';
import imgPodcast6 from '../assets/resources/imgPodcast6.webp';
import imgPodcast7 from '../assets/resources/imgPodcast7.webp';

import { useTranslation } from 'react-i18next';
import imgPlaylist1 from '../assets/resources/imgPlaylist1.svg';
import imgPlaylist2 from '../assets/resources/imgPlaylist2.svg';
import imgPlaylist3 from '../assets/resources/imgPlaylist3.svg';
import imgPlaylist4 from '../assets/resources/imgPlaylist4.svg';

export type resourcesDataProps = {
  id: number;
  avatar: string | null;
  title: string;
  description: string;
  image: string;
};

export type meditationDataProps = resourcesDataProps & {
  subtitle: string;
  duration: string;
  views: string;
  author: string;
  date: string;
};

export const useResourcesData = () => {
  const { t } = useTranslation();

  const meditationData: meditationDataProps[] = [
    {
      id: 1,
      avatar: avatarMedit1,
      title: t('resources.meditation.items.0.title'),
      subtitle: t('resources.meditation.items.0.subtitle'),
      duration: t('resources.meditation.items.0.duration'),
      views: t('resources.meditation.items.0.views'),
      author: t('resources.meditation.items.0.author'),
      date: t('resources.meditation.items.0.date'),
      description: t('resources.meditation.items.0.description'),
      image: imgMedit1,
    },
    {
      id: 2,
      avatar: avatarMedit2,
      title: t('resources.meditation.items.1.title'),
      description: t('resources.meditation.items.1.description'),
      subtitle: t('resources.meditation.items.1.subtitle'),
      duration: t('resources.meditation.items.1.duration'),
      views: t('resources.meditation.items.1.views'),
      author: t('resources.meditation.items.1.author'),
      date: t('resources.meditation.items.1.date'),
      image: imgMedit2,
    },
    {
      id: 3,
      avatar: avatarMedit3,
      title: t('resources.meditation.items.2.title'),
      description: t('resources.meditation.items.2.description'),
      subtitle: t('resources.meditation.items.2.subtitle'),
      duration: t('resources.meditation.items.2.duration'),
      views: t('resources.meditation.items.2.views'),
      author: t('resources.meditation.items.2.author'),
      date: t('resources.meditation.items.2.date'),
      image: imgMedit3,
    },
    {
      id: 4,
      avatar: avatarMedit4,
      title: t('resources.meditation.items.3.title'),
      description: t('resources.meditation.items.3.description'),
      subtitle: t('resources.meditation.items.3.subtitle'),
      duration: t('resources.meditation.items.3.duration'),
      views: t('resources.meditation.items.3.views'),
      author: t('resources.meditation.items.3.author'),
      date: t('resources.meditation.items.3.date'),
      image: imgMedit4,
    },
  ];

  const podcastData: resourcesDataProps[] = [
    {
      id: 1,
      avatar: avatarPodcast1,
      title: t('resources.podcast.items.0.title'),
      description: t('resources.podcast.items.0.description'),
      image: imgPodcast1,
    },
    {
      id: 2,
      avatar: avatarPodcast2,
      title: t('resources.podcast.items.1.title'),
      description: t('resources.podcast.items.1.description'),
      image: imgPodcast2,
    },
    {
      id: 3,
      avatar: avatarPodcast3,
      title: t('resources.podcast.items.2.title'),
      description: t('resources.podcast.items.2.description'),
      image: imgPodcast3,
    },
    {
      id: 4,
      avatar: avatarPodcast4,
      title: t('resources.podcast.items.3.title'),
      description: t('resources.podcast.items.3.description'),
      image: imgPodcast4,
    },
    {
      id: 5,
      avatar: avatarPodcast5,
      title: t('resources.podcast.items.4.title'),
      description: t('resources.podcast.items.4.description'),
      image: imgPodcast5,
    },
    {
      id: 6,
      avatar: avatarPodcast6,
      title: t('resources.podcast.items.5.title'),
      description: t('resources.podcast.items.5.description'),
      image: imgPodcast6,
    },
    {
      id: 7,
      avatar: avatarPodcast7,
      title: t('resources.podcast.items.6.title'),
      description: t('resources.podcast.items.6.description'),
      image: imgPodcast7,
    },
  ];

  const playlistData: resourcesDataProps[] = [
    {
      id: 1,
      title: t('resources.playlist.items.0.title'),
      description: t('resources.playlist.items.0.description'),
      image: imgPlaylist1,
      avatar: null,
    },
    {
      id: 2,
      title: t('resources.playlist.items.1.title'),
      description: t('resources.playlist.items.1.description'),
      image: imgPlaylist2,
      avatar: null,
    },
    {
      id: 3,
      title: t('resources.playlist.items.2.title'),
      description: t('resources.playlist.items.2.description'),
      image: imgPlaylist3,
      avatar: null,
    },
    {
      id: 4,
      title: t('resources.playlist.items.3.title'),
      description: t('resources.playlist.items.3.description'),
      image: imgPlaylist4,
      avatar: null,
    },
  ];

  return {
    meditationData,
    podcastData,
    playlistData,
  };
};
