/**
 * Base class for all "entity" components, providing common utility methods 
 */
export class EntityComponentBase {
    
    /**
     * For a given array of entity objects, creates a mnap of the 'id' field to a specified attribute;
     * @param entityList Array of entity objects
     * @param attribute name of the entity attribute 
     * @return the map  
     */
    mapToAttribute(entityList: Array<any>, attribute: string) {
        const idToAttribute = {};
            for (const entity of entityList){
            const id = entity['id'];
            const value = entity[attribute];
            idToAttribute[id] = value;
         }
        return idToAttribute;
    }
}