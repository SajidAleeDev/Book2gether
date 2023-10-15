import { Image } from "react-native";

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
      id: number;
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
export interface EmployeeNavigationProps {
  navigate: (arg: string, { data }: { data: any }) => void;
}

export interface TimeProps {
  item: {
    startTime: string;
    endTime: string;
  };
  SelectedDate: boolean;
}
export interface notificationProps {
  item: {
    comments: string;
    status: string;
    Image: string;
  };
  SelectedDate: boolean;
}
export interface Employeeprops {
  route?: {
    params: {
      data: {
        name: string;
        Image: string;
        Expertise: string;
      }[];
    };
  };
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

export interface EmployeePropsItem {
  item: {
    name: string;
    Image: string;
    Expertise: string;
  };
  selectedEmployee: boolean;
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
      data: ReturnProps;
    };
  };
}

export interface TreatmentDetailsProps {
  name: string;
  duration: string;
  price: string;
}

export interface BucketProvider {
  children: React.ReactNode;
}

export interface BucketContext {
  user: null;
  setUser: (user: null) => void;
  selectedSalon: SalonCartProps | null;
  setSelectedSalon: (selectedSalon: SalonCartProps | null) => void;
  selectedDate: string | null;
  setSelectedDate: (selectedDate: string) => void;
  selectedTreatmentBucket: SalonTreatment[] | null;
  setSelectedTreatmentBucket: (
    selectedTreatment: SalonTreatment[] | null
  ) => void;
  selectedEmployee: EmployeePropsBucket | null;
  setSelectedEmployee: (selectedEmployee: EmployeePropsBucket) => void;
}

export interface SalonCartProps {
  SalonImage?: string;
  SalonName?: string;
  SalonAddress?: string;
  SalonNumber?: string;
}

export interface SalonTreatment {
  name: string;
  duration: string;
  price: string;
}

export interface EmployeePropsBucket {
  name: string;
  Image: string;
  Expertise: string;
}
export interface UserProfileProps {

  updateProfileImage: (imageUri: string) => void;
}
export interface ImagePickerProps {
  updateProfileImage: (imageUri: string) => void;
}
