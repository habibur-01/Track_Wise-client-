// import GoogleMapReact from 'google-map-react';
import "./styles.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerLoc from "../../assets/location-pin.png"
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster"
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaArrowDown, FaCheck } from "react-icons/fa";


const people = [
    { name: 'Dhanmondi' },
    { name: 'Uttara' },
    { name: 'Savar' },
    { name: 'Tongi' },

]

const TrackTransport = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [selected, setSelected] = useState(people[0])
    // const [markerPosition, setMarkerPosition] = useState(null);
    // const [markerAddress, setMarkerAddress] = useState(null);
    // const markers = [
    //     {
    //         geocode: [23.7956, 90.3537],
    //         popUp: "Hello, I am pop up1"
    //     },
    //     {
    //         geocode: [23.80, 90.365417],
    //         popUp: "Hello, I am pop up2"
    //     },
    //     {
    //         geocode: [23.822, 90.36541],
    //         popUp: "Hello, I am pop up3"
    //     },
    // ]
    const customIcon = new Icon({
        iconUrl: markerLoc,
        iconSize: [38, 38]
    })


    useEffect(() => {
        // Get user's current location using Geolocation API
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                setUserLocation([latitude, longitude]);
            },
            error => {
                console.error('Error getting user location:', error);
            }
        );
    }, []);

    // const handleMarkerClick = async (e) => {
    //     const { lat, lng } = e.latlng;
    //     setMarkerPosition({ lat, lng });
    //     console.log(lat)

    //     try {
    //         const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
    //         const data = await response.json();
    //         setMarkerAddress(data.display_name || 'Address not found');
    //     } catch (error) {
    //         console.error('Error fetching address:', error);
    //         setMarkerAddress('Error fetching address');
    //     }
    // };

    return (
        <div className="mx-auto my-10">
            <div className="">
                <div className="w-[40%] mx-auto my-10">
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white border-2 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <FaArrowDown
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {people.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                    <div className="flex justify-center mt-4"><button className="btn bg-[#488789]  text-white">Search Location</button></div>
                </div>
                <MapContainer center={[23.822350, 90.365417]} zoom={12}>
                    <TileLayer attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MarkerClusterGroup>
                        {userLocation && <Marker position={userLocation} icon={customIcon}>
                            <Popup>
                                {`latitude:` + userLocation[0] + ',' + "longitude:" + userLocation[1]}
                            </Popup>
                        </Marker>}
                       
                    </MarkerClusterGroup>

                </MapContainer>

            </div>

            {/* <img src={markerLoc} alt="" /> */}

        </div>
    )

};

export default TrackTransport;