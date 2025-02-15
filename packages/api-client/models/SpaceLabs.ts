/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* space labs
*/
export class SpaceLabs {
    /**
    * view manual save
    */
    'viewManualSave'?: boolean;
    /**
    * robot
    */
    'robot'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "viewManualSave",
            "baseName": "viewManualSave",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "robot",
            "baseName": "robot",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SpaceLabs.attributeTypeMap;
    }

    public constructor() {
    }
}

