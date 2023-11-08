import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Site Page
 *
 *
 */
export interface SitePage extends SanityDocument {
  _type: "site_page";

  /**
   * Title — `string`
   *
   * The title of the page.
   */
  title: string;

  /**
   * Path — `slug`
   *
   * The path to the page on the site, as a relative path. E.g. ".artists.johnlennon".
   */
  path: { _type: "path"; current: string };

  /**
   * Page Builder — `array`
   *
   * Assemble your page using configurable modules.
   */
  pageBuilder?: Array<SanityKeyed<PeCopy>>;

  /**
   * SEO Title — `string`
   *
   * An SEO title (appears in the tab bar). If unset, uses the page's title.
   */
  seo_title?: string;

  /**
   * SEO Description — `string`
   *
   * An SEO description. If unset, uses text from the page's content.
   */
  seo_description?: string;

  /**
   * SEO Keywords — `string`
   *
   * SEO keywords.
   */
  seo_keywords?: string;

  /**
   * Last Revalidated — `datetime`
   *
   * When this page was last revalidated. Re-publish or manually revalidate to change.
   */
  last_revalidated?: string;
}

/**
 * Software
 *
 *
 */
export interface Software extends SanityDocument {
  _type: "software";

  /**
   * Short Title — `string`
   *
   * A short title for the table view of the software.
   */
  short_title: string;

  /**
   * Link — `url`
   *
   * A link to a page for the software.
   */
  link?: string;

  /**
   * Date — `date`
   *
   * When was this software created?
   */
  date?: string;

  /**
   * Group — `string`
   *
   * A group for the software.
   */
  group: string;

  /**
   * Title — `string`
   *
   * The title of the software.
   */
  title: string;

  /**
   * Slug — `slug`
   *
   * (Optional) A slug for the software's page on the site.
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Page Builder — `array`
   *
   * The event's page on the DAY site.
   */
  pageBuilder?: Array<SanityKeyed<PeCopy>>;

  /**
   * Last Revalidated — `datetime`
   *
   * When this page was last revalidated. Re-publish or manually revalidate to change.
   */
  last_revalidated?: string;
}

export type PeCopy = {
  _type: "pe_copy";
  /**
   * content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;

  /**
   * columns — `number`
   *
   * How many evenly-spaced columns to break the text into. Default 1.
   */
  columns: number;
};

export type Documents = SitePage | Software;
