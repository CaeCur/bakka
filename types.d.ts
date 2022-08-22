export interface Video {
  caption: string;

  comments: {
    comment: string;
    _key: string;
    postedBy: {
      _ref: string;
    };
  }[];

  likes: {
    like: {
      _key: string;
      _ref: string;
      _type: string;
    };
  }[];

  postedBy: {
    _id: string;
    image: string;
    userName: string;
  };

  userId: string;

  video: {
    asset: {
      url: string;
      _id: string;
    };
  };

  _id: string;
}
