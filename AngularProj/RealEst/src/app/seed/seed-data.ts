import { IBuyer } from '../IBuyer';
import { IProperty } from '../IProperty';
import { IpurchaseOrder } from '../IPurchaseOrder';
import { ISeller } from '../ISeller';
import { IUser } from '../IUser';

/**
 * Offline demo data. The services use the live backend when it is reachable and
 * fall back to this seed data when it is not, so the app stays presentable
 * without a running Oracle database and Tomcat server.
 */

export const SEED_SELLERS: ISeller[] = [
  {
    customerId: 2001,
    sellerId: 201,
    fName: 'Arjun',
    lName: 'Mehta',
    phoneNumber: '+91 98400 11201',
    email: 'demo@seller.com',
    pan: 'AMTPM1201A',
    adhar: '4821 7765 2201',
    password: 'demo123',
  },
  {
    customerId: 2002,
    sellerId: 202,
    fName: 'Priya',
    lName: 'Nair',
    phoneNumber: '+91 99000 11202',
    email: 'priya.nair@realtor.in',
    pan: 'PRNPN1202B',
    adhar: '5932 8876 3312',
    password: 'seller123',
  },
  {
    customerId: 2003,
    sellerId: 203,
    fName: 'Rahul',
    lName: 'Verma',
    phoneNumber: '+91 98200 11203',
    email: 'rahul.verma@realtor.in',
    pan: 'RHVPV1203C',
    adhar: '6043 9987 4423',
    password: 'seller123',
  },
  {
    customerId: 2004,
    sellerId: 204,
    fName: 'Sneha',
    lName: 'Reddy',
    phoneNumber: '+91 90000 11204',
    email: 'sneha.reddy@realtor.in',
    pan: 'SNRPR1204D',
    adhar: '7154 1098 5534',
    password: 'seller123',
  },
];

function seller(id: number): ISeller {
  return SEED_SELLERS.find((s) => s.sellerId === id) || SEED_SELLERS[0];
}

export const SEED_PROPERTIES: IProperty[] = [
  {
    property_Id: 1,
    property_Type: 'Sea-facing Villa',
    price: 18500000,
    status: true,
    contact: '+91 98400 11201',
    description:
      'Spacious 4 BHK villa along the East Coast Road with a private garden, covered parking for two cars and uninterrupted sea breeze. Gated community with 24x7 security.',
    seller: seller(201),
    latitude: 12.8406,
    longitude: 80.2272,
    place: 'East Coast Road, Chennai',
    bhk: 4,
    floor: 2,
  } as IProperty,
  {
    property_Id: 2,
    property_Type: 'Premium Apartment',
    price: 9500000,
    status: true,
    contact: '+91 99000 11202',
    description:
      '3 BHK apartment in a well-connected Whitefield tech corridor. Modular kitchen, clubhouse, gym and a rooftop infinity pool. Walk to metro and major IT parks.',
    seller: seller(202),
    latitude: 12.9698,
    longitude: 77.7499,
    place: 'Whitefield, Bengaluru',
    bhk: 3,
    floor: 7,
  } as IProperty,
  {
    property_Id: 3,
    property_Type: 'Independent House',
    price: 14000000,
    status: true,
    contact: '+91 98200 11203',
    description:
      '4 BHK independent house in Gachibowli with a landscaped terrace, Vaastu-compliant layout and borewell water supply. Close to financial district and schools.',
    seller: seller(204),
    latitude: 17.4401,
    longitude: 78.3489,
    place: 'Gachibowli, Hyderabad',
    bhk: 4,
    floor: 3,
  } as IProperty,
  {
    property_Id: 4,
    property_Type: 'Lakeview Apartment',
    price: 23000000,
    status: false,
    contact: '+91 98200 11203',
    description:
      'Elegant 2 BHK overlooking Powai lake with floor-to-ceiling windows, imported fittings and concierge service. Minutes from Hiranandani Gardens.',
    seller: seller(203),
    latitude: 19.1176,
    longitude: 72.906,
    place: 'Powai, Mumbai',
    bhk: 2,
    floor: 11,
  } as IProperty,
  {
    property_Id: 5,
    property_Type: 'Luxury Penthouse',
    price: 31000000,
    status: true,
    contact: '+91 98400 11201',
    description:
      '5 BHK duplex penthouse on the OMR IT expressway with a private terrace garden, home automation and dedicated EV charging. Premium skyline views.',
    seller: seller(201),
    latitude: 12.8996,
    longitude: 80.2209,
    place: 'OMR, Chennai',
    bhk: 5,
    floor: 18,
  } as IProperty,
  {
    property_Id: 6,
    property_Type: 'Residential Plot',
    price: 5500000,
    status: true,
    contact: '+91 99000 11202',
    description:
      'DTCP-approved 2400 sq.ft. corner plot in a fast-developing Coimbatore layout. Clear title, ready for construction, with wide tar roads and street lighting.',
    seller: seller(202),
    latitude: 11.0168,
    longitude: 76.9558,
    place: 'Saravanampatti, Coimbatore',
    bhk: 0,
    floor: 0,
  } as IProperty,
  {
    property_Id: 7,
    property_Type: 'Studio Apartment',
    price: 4800000,
    status: true,
    contact: '+91 90000 11204',
    description:
      'Compact, fully-furnished 1 BHK studio in Hinjewadi Phase 2. Ideal for young professionals, with power backup, covered parking and a co-working lounge.',
    seller: seller(204),
    latitude: 18.5916,
    longitude: 73.7389,
    place: 'Hinjewadi, Pune',
    bhk: 1,
    floor: 5,
  } as IProperty,
  {
    property_Id: 8,
    property_Type: 'Garden Villa',
    price: 27500000,
    status: false,
    contact: '+91 99000 11202',
    description:
      'Contemporary 4 BHK villa in Sarjapur with a private plunge pool, solar panels and a double-height living room. Part of a 20-acre gated township.',
    seller: seller(202),
    latitude: 12.8609,
    longitude: 77.7846,
    place: 'Sarjapur, Bengaluru',
    bhk: 4,
    floor: 2,
  } as IProperty,
  {
    property_Id: 9,
    property_Type: 'Waterfront Apartment',
    price: 8500000,
    status: true,
    contact: '+91 98200 11203',
    description:
      '3 BHK apartment on Marine Drive with a balcony facing the backwaters, 24x7 security and a children\u2019s play area. Close to the metro and shopping malls.',
    seller: seller(203),
    latitude: 9.9816,
    longitude: 76.2767,
    place: 'Marine Drive, Kochi',
    bhk: 3,
    floor: 9,
  } as IProperty,
  {
    property_Id: 10,
    property_Type: 'Row House',
    price: 11000000,
    status: true,
    contact: '+91 90000 11204',
    description:
      '3 BHK row house in a serene Ahmedabad neighbourhood with a private courtyard, rainwater harvesting and a community park. Excellent schools nearby.',
    seller: seller(204),
    latitude: 23.0587,
    longitude: 72.5295,
    place: 'Bopal, Ahmedabad',
    bhk: 3,
    floor: 2,
  } as IProperty,
  {
    property_Id: 11,
    property_Type: 'Luxury Farmhouse',
    price: 42000000,
    status: true,
    contact: '+91 98400 11201',
    description:
      '5 BHK farmhouse near Mahabalipuram set on an acre of greenery, with an organic orchard, swimming pool and a party lawn. A perfect weekend retreat.',
    seller: seller(201),
    latitude: 12.6208,
    longitude: 80.1945,
    place: 'Mahabalipuram, Chennai',
    bhk: 5,
    floor: 2,
  } as IProperty,
  {
    property_Id: 12,
    property_Type: 'Smart Apartment',
    price: 7800000,
    status: true,
    contact: '+91 98200 11203',
    description:
      '2 BHK smart home in Kondapur with app-controlled lighting, piped gas and a rooftop solar plant. Walking distance to IKEA and the metro station.',
    seller: seller(203),
    latitude: 17.4647,
    longitude: 78.3639,
    place: 'Kondapur, Hyderabad',
    bhk: 2,
    floor: 6,
  } as IProperty,
];

export const SEED_BUYER: IBuyer = {
  customerId: 1001,
  buyerId: 1001,
  fName: 'Deepa',
  lName: 'Krishnan',
  phoneNumber: '+91 98765 43210',
  email: 'demo@buyer.com',
  pan: 'DKRPK1001E',
  adhar: '2314 5566 7788',
  password: 'demo123',
  address: '14, Gandhi Street, Adyar',
  country: 'India',
  zipcode: '600020',
};

export const SEED_BUYERS: IBuyer[] = [
  SEED_BUYER,
  {
    customerId: 1002,
    buyerId: 1002,
    fName: 'Vikram',
    lName: 'Iyer',
    phoneNumber: '+91 93800 22110',
    email: 'vikram.iyer@mail.com',
    pan: 'VKIPI1002F',
    adhar: '3425 6677 8899',
    password: 'buyer123',
    address: '7, Lake View Road, Indiranagar',
    country: 'India',
    zipcode: '560038',
  },
  {
    customerId: 1003,
    buyerId: 1003,
    fName: 'Ananya',
    lName: 'Sharma',
    phoneNumber: '+91 90123 44556',
    email: 'ananya.sharma@mail.com',
    pan: 'ANSPS1003G',
    adhar: '4536 7788 9900',
    password: 'buyer123',
    address: '22, Rose Garden, Banjara Hills',
    country: 'India',
    zipcode: '500034',
  },
];

export const SEED_WISHLIST: IProperty[] = [
  SEED_PROPERTIES[1],
  SEED_PROPERTIES[4],
  SEED_PROPERTIES[8],
];

export const SEED_ORDERS: IpurchaseOrder[] = [
  {
    purhcaseId: 9001,
    buyer: SEED_BUYER.buyerId,
    maxAcceptedPrice: SEED_PROPERTIES[2].price,
    date: '2026-03-18',
    property: SEED_PROPERTIES[2] as any,
    seller: SEED_PROPERTIES[2].seller.sellerId,
  },
  {
    purhcaseId: 9002,
    buyer: SEED_BUYER.buyerId,
    maxAcceptedPrice: SEED_PROPERTIES[6].price,
    date: '2026-05-02',
    property: SEED_PROPERTIES[6] as any,
    seller: SEED_PROPERTIES[6].seller.sellerId,
  },
];

interface DemoAccount {
  email: string;
  password: string;
  user: IUser;
}

const DEMO_ACCOUNTS: { [role: string]: DemoAccount } = {
  buyer: {
    email: 'demo@buyer.com',
    password: 'demo123',
    user: { id: SEED_BUYER.buyerId, email: 'demo@buyer.com', password: 'demo123', user: 'buyer' },
  },
  seller: {
    email: 'demo@seller.com',
    password: 'demo123',
    user: { id: 201, email: 'demo@seller.com', password: 'demo123', user: 'seller' },
  },
  admin: {
    email: 'admin@mail.com',
    password: 'admin',
    user: { id: 101, email: 'admin@mail.com', password: 'admin', user: 'admin' },
  },
};

/**
 * Returns a demo user when the supplied credentials match a known demo account
 * for the given role, otherwise null. Used as an offline login fallback.
 */
export function demoLogin(role: string, email: string, password: string): IUser | null {
  const account = DEMO_ACCOUNTS[role];
  if (!account) {
    return null;
  }
  const emailMatches = (email || '').trim().toLowerCase() === account.email;
  if (emailMatches && password === account.password) {
    return { ...account.user };
  }
  return null;
}
