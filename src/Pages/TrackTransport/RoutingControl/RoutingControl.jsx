import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useEffect } from "react";
import L from "leaflet";
import { PropTypes } from "prop-types"
import { useMap } from "react-leaflet";

const RoutingControl = ({ destination }) => {
    const map = useMap();
    // console.log(origin)
    useEffect(() => {
        if (map && destination) {
            map.eachLayer(layer => {
                if (layer instanceof L.Routing.Control) {
                    map.removeControl(layer);
                }
            });
            L.Routing.control({
                waypoints: [

                    L.latLng(23.881726, 90.324257),
                    L.latLng(destination[0], destination[1])
                ]
            }).addTo(map);
        }
    }, [map, destination]);

    return null;
};
RoutingControl.propTypes = {
    // map: PropTypes.any,
    // origin: PropTypes.any,
    destination: PropTypes.any
}

export default RoutingControl;
