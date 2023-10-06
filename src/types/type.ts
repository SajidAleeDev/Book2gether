import { Image } from "react-native";

export interface NavigationProps {
  navigate: (arg: string) => void;
}

export interface children {
  children: React.ReactNode;
}

export interface ImageTextProps {
  ImageTitle: string;
  ImageDescription: string;
}

export interface ImageProps {
  ImageSource: React.ComponentProps<typeof Image>["source"];
}

export interface ButtonProps {
  skip?: boolean;
  title: string;
  ButtonPress?: () => void;
  SkipButtonPress?: () => void;
}

export interface InputProps {
  icon?: React.ReactNode;
  width?: number;
  height?: number;
}

export interface HomeItemNavigationProps {
  navigate: (arg: string, { id }: { id: string }) => void;
}
export interface SalonDetailsProps {
  route?: {
    params: {
      id: number;
    };
  };
  navigation?: any;
}
