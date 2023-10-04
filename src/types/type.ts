import { Image } from "react-native";
export interface NavigationProps {
  navigate: (arg: string) => void;
}

export interface children {
  children: React.ReactNode;
}

export interface ImageTextProps {
  ImageTitle: string;
  Imagedescription: string;
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
