import { GestureResponderEvent, Image } from "react-native";

export interface ReturnProps {
  id: number;
  Image: string;
  name: string;
  open: boolean;
  Location: string;
  city: string;
  number: string;
  Rating: number;
  Employees: {
    name: string;
    Image: string;
    Expertise: string;
  }[];
  OpenTiming: {
    day: string;
    openTime?: string;
    closeTime?: string;
    Closed?: boolean | undefined;
  }[];
  Treatment: {
    name: string;
    Treatments: {
      name: string;
      duration: string;
      price: string;
    }[];
  }[];
  Review: {
    Image: string;
    name: string;
    date: string;
    Rating: number;
    Reviewed: string;
  }[];
}
export interface BackButtonProps {
  color: string;
  title?: string;
}

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
export interface TreatmentsNavigationProps {
  navigate: (arg: string, { data }: { data: any }) => void;
}
export interface SalonDetailsProps {
  route?: {
    params: {
      id: number;
    };
  };
  navigation?: any;
}

export interface HomeItemProps {
  item: {
    id: string | any;
    Image: string;
    name: string;
    open?: boolean;
    Location: string;
    city: string;
  };
}
export interface OpenTimeTextProps {
  item: {
    day: string;
    openTime?: string;
    closeTime?: string;
    Closed?: boolean | undefined;
  };
}

export interface DetailsProps {
  route?:
    | {
        params: {
          data: ReturnProps;
        };
      }
    | undefined;
}

export interface EmployeeProps {
  item: {
    name: string;
    Image: React.ComponentProps<typeof Image>["source"];
    Expertise: string;
  };
}

export interface TreatmentProps {
  item: {
    name: string;
  };

  SelectedTreatment: boolean;
}

export interface TreatmentDetailsProps {
  name: string;
  duration: string;
  price: string;
}

export interface ReviewItemProps {
  item: {
    name: string;
    Image: string;
    date: string;
    Rating: number;
    Reviewed: string;
  };
}

export interface TreatmentsItemProps {
  route?: {
    params: {
      data: {
        name: string;
        Treatments: {
          name: string;
          duration: string;
          price: string;
        }[];
      }[];
    };
  };
}

export interface TreatmentDetailsProps {
  name: string;
  duration: string;
  price: string;
}
