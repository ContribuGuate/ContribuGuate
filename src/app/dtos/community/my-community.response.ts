
export interface CommunityDetails {
    uuid: string;
    name: string;
    description: string;
    coverImage: string;
    public: boolean;
    code: string;
    donationLink: string;
    password: string | null;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CommunityMembership {
    uuid: string;
    active: boolean;
    community: CommunityDetails;
  }
  
  export interface GetUserCommunitiesResponse {
    success: boolean;
    communities: CommunityMembership[];
  }
  