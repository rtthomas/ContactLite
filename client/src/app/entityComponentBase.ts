/**
 * Base class for all "entity" components, providing common utility methods 
 */
export class EntityComponentBase {
    
    /**
     * For a given array of entity objects, creates a pair of maps;
     * the "attributeToId" maps a specified entity atttribute to the 'id' field;
     * the "idToAttribute" maps the inverse relationship
     * @param entityList Array of entity objects
     * @param attribute name of the entity attribute 
     * @return the maps object  
     */
    createEntityMaps(entityList: Array<any>, attribute: string) {
        const maps = {attributeToId: {}, idToAttribute: {}};
            for (const entity of entityList){
            const id = entity['id'];
            const value = entity[attribute];
            maps.attributeToId[value] = id;
            maps.idToAttribute[id] = value;
         }
        return maps;
    }
}