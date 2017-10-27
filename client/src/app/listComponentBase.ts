import { CacheService } from './cache.service';
/**
 * Base class for list components, providing common utility functions
 */
export class ListComponentBase {
    cache: CacheService;

    constructor(cache: CacheService) { this.cache = cache; }
    /**
     * Sorts an array of entities.
     * @param list the array to be sorted
     * @param sortBy the field of the entity class on which to sort
     * @param isDate true if the sortBy field is a date string
     * @return a new sorted array
     */
    sortList(list: any, sortBy: string) {
        const sortKeys = [];
        const elementMap = {};
        const sortedList = [];
        for (const element of list) {
            const sortField = element[sortBy];
            sortKeys.push(sortField);
            if (!elementMap[sortField]) {
                elementMap[sortField] = [];
            }
            elementMap[sortField].push(element);
        }
        sortKeys.sort();
        // Preserve original order of elements with same sort value
        for (const index in elementMap) {
            elementMap[index].reverse();
        }
        for (const key of sortKeys) {
            const element = elementMap[key].pop();
            sortedList.push(element);
        }
        return sortedList;
    }
    /**
     * Sorts an array of entities. 
     * @param list the array to be sorted
     * @param sortBy name of a "foreign id" attribute of the entity which references another entity containing the value on which to sort
     * @param referenceType the referenced entity type
     * @param referenceField the name of the attribute in the referenced entity on which to sort
     * @return a new sorted array
     */
    sortListReferenced(list: any, sortBy: string, referenceType: string, referenceField: string) {
        const sortKeys = [];
        const elementMap = {};
        const sortedList = [];
        for (const element of list) {
            const referenceId = element[sortBy];
            let referencedEntity;
            let sortField;
            if (referenceId) {
                referencedEntity = this.cache.getById(referenceType, referenceId);
                sortField = referencedEntity[referenceField];
            }
            else {
                sortField = '';
            }
            sortKeys.push(sortField);
            if (!elementMap[sortField]) {
                elementMap[sortField] = [];
            }
            elementMap[sortField].push(element);
        }
        sortKeys.sort();
        // Preserve original order of elements with same sort value
        for (const index in elementMap) {
            elementMap[index].reverse();
        }
        for (const key of sortKeys) {
            const element = elementMap[key].pop();
            sortedList.push(element);
        }
        return sortedList;
    }

    isReferencedBy(referencedType: string, id: number, referingTypes: [string]) {
        for (const referingType of referingTypes) {
            const list = this.cache.getAll(referingType);
            const referenceId = referencedType + 'Id';
            for (const referingEntity of list) {
                if (referingEntity[referenceId] === id) {
                    return true;
                }
            }
        }
        return false;
    }
}