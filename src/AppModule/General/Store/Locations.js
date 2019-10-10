
const initialState = {markers: []};

export const updateMarker = markers => ({
  type: 'UPDATE_MARKERS',
  markers,
});

export const markers = (
    state=initialState, {type, markers}
) => 
  type==='UPDATE_MARKERS'
  ?markers
  :state.markers;