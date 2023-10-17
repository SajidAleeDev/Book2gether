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
  goBack?: any
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
  modalButton?: boolean;
}

export interface InputProps {
  icon?: React.ReactNode;
  width?: number;
  height?: number;
  marginBottom?:number
  
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

export interface SelectedTimeProps {
  startTime: string;
  endTime: string;
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
  setUser?: () => void;
  saveUser: (user: null) => void;
  

}

export interface BucketProps {
  children: React.ReactNode;
}

type Treatment = {
  id: number;
  name: string;
  duration: string;
};

type Employee = {
  name: string;
  Image: string;
  Expertise: string;
};

export interface OverviewScreenDataPoops {
  ImageUrl: string;
  name: string;
  Location: string;
  city: string;
  number: string;
  TotalPrice: number;
  Date: string;
  Time: string;

  Treatments: Treatment[];

  Employees: Employee;
}

export interface ModelProps {
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
  

  image: ImageProps["ImageSource"];
  Title: string;
  Description: string;
  ButtonTitle: string;
  HandleClicked: () => void;
  
  
}
export interface UserProfileProps {

  updateProfileImage: (imageUri: string) => void;
}
export interface ImagePickerProps {
  updateProfileImage: (imageUri: string) => void;
}
export interface notificationProps {
  item: {
    comments: string;
    status: string;
    Image: string;
  };
  SelectedDate: boolean;
}