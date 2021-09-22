export interface UsersPost { 
  optionName: string;
  platformName: string;
  googleAccount: { 
    viewName: string;
  }
}

export interface Users { 
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
  rooftopGoogleOptionId: number;
  googleId: number;
  dotDigitalId: number;
  optionName: string;
  optionValue: string;
  platformName: string;
  googleAccount: {
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
    googleId: number;
    active: boolean;
    viewId: number;
    viewName: string;
    credentials: string;
    vdpUrlPatterns: [
      {
        createdBy: string;
        createdAt: string;
        updatedBy: string;
        updatedAt: string;
        googleVdpUrlPatternId: number;
        googleId: number;
        newVdpUrlPattern: string;
        usedVdpUrlPattern: string;
        certifiedVdpUrlPattern: string;
      }
    ]
  },
  dotDigitalAccount: {
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
    dotDigitalId: number;
    accountName: string;
    accountId: number;
    apiUser: string;
    apiPassword: string;
    active: boolean;
  }
}

export interface UserResponse {
  data: Users[];
}


