
/**
 * This function apply the filters over several locations.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 10th, 2019.
 * 
 * @param   {Array<Object>} locations Locations to apply the filter 
 * @param   {Set<string>} filters Array of filter keys
 * @returns {Arrayz<Object>} All locations when filters set is empty or
 *                           locations filtered when there are filter keys. 
 */
export const applyFilters = (locations, filters) =>
  filters.size 
  ?locations.reduce( (acc, location) => 
     location.type.reduce( (flag, type) => flag || filters.has(type), false)
     ?acc.concat(location)
     :acc,
   [])
  :locations;