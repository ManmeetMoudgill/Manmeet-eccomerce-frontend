export interface OffersItems {
  id: number;
  src: string;
  title: string;
  description?: string;
  price?: string;
  discount?: number;
  discountPrice?: string;
  tag?: string;
  tagBackgroundClass?: string;
}

export interface BreakPoints {
  [key: string]: number;
}
