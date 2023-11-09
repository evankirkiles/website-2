/*
 * index.ts
 * Author: evan kirkiles
 * Created On Sun Aug 27 2023
 * 2023 Digital Portfolio
 *
 * As you add more PageBuilder elements in this directory, add them to the
 * below array to enable them in the SitePage document page builder type. This
 * will also automatically add them to the Sanity schema.
 */
import ColumnsType from './ColumnsType';
import CopyType from './CopyType';
import SpacerType from './SpacerType';

const pageElements = [CopyType, ColumnsType, SpacerType];

export default pageElements;
