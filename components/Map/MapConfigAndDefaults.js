export const libraries = ["places"]

//18.997429,73.115723
export const mapCenter = {lat: 20.360685544458363, lng: 80.60235898925784}

export const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export const defaultOptions = {
  strokeOpacity: 0.6,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  visible: true,
  zIndex: 3,
  strokeColor: "white",
  strokeFill: "white",
}

export const facebookCircle = {
  ...defaultOptions,
  fillColor: "#1DA1F2",
  fillOpacity: 0.2,
}

export const twitterCircle = {
  ...defaultOptions,
  fillColor: "#4267B2",
  fillOpacity: 0.2,
}

export const instagramCircle = {
  ...defaultOptions,
  fillColor: "#FCAF45",
  fillOpacity: 0.2,
}

export const locations = [
  {
    lat: 18.9817171,
    lng: 73.1231582,
  },
  {
    lat: 18.9948434,
    lng: 73.1089829,
  },
  {
    lat: 18.9930942,
    lng: 73.1029946,
  },
  {
    lat: 19.0172734,
    lng: 73.1003927,
  },
]