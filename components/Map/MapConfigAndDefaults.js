export const libraries = ["places"]

//18.997429,73.115723
export const mapCenter = {lat: 18.997429, lng: 73.115723}

export const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true
}

export const circleOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#EB4747",
  strokeFill: "#F32424",
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
  {
    lat: 19.0172734,
    lng: 73.1003927,
  }
]