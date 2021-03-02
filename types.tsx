export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumData = {
  id: string;
  name: string;
  by: string;
  likes: number;
  imageUri: string;
  artistsHeadline: string;
}

export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string,
}