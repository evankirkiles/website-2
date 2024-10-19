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
 * Site Settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "site_settings";

  /**
   * Site Title — `string`
   *
   * The name of the site (what shows in tab bar). Should be under 66 characters.
   */
  title?: string;

  /**
   * Site Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Instagram Link — `string`
   *
   *
   */
  instagram?: string;

  /**
   * Twitter Link — `string`
   *
   *
   */
  twitter?: string;

  /**
   * Facebook Link — `string`
   *
   *
   */
  facebook?: string;

  /**
   * Contact Email — `string`
   *
   *
   */
  contact_email?: string;

  /**
   * Resume — `file`
   *
   *
   */
  resume?: { _type: "file"; asset: SanityReference<any> };
}

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
  pageBuilder?: Array<
    SanityKeyed<PeCopy> | SanityKeyed<PeColumns> | SanityKeyed<PeSpacer>
  >;

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
   * Preview Picture — `image`
   *
   * A distorted preview image to use. Should be in about a 3:2 aspect ratio.
   */
  picture?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Under development? — `boolean`
   *
   * Is the software under development?.
   */
  under_development: boolean;

  /**
   * Page — `reference`
   *
   * An optional page for the software.
   */
  page?: SanityReference<SitePage>;
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

  /**
   * hide_on_small — `boolean`
   *
   * If true, hides this copy on small height devices.
   */
  hide_on_small?: boolean;
};

export type PeColumns = {
  _type: "pe_columns";
  /**
   * Equally space? — `boolean`
   *
   *
   */
  justification?: boolean;

  /**
   * First Column — `array`
   *
   *
   */
  content_1: Array<SanityKeyed<PeCopy>>;

  /**
   * Second Column (Optional) — `array`
   *
   *
   */
  content_2?: Array<SanityKeyed<PeCopy>>;

  /**
   * Third Column (Optional) — `array`
   *
   *
   */
  content_3?: Array<SanityKeyed<PeCopy>>;
};

export type PeSpacer = {
  _type: "pe_spacer";
  /**
   * placeholder — `boolean`
   *
   *
   */
  placeholder?: boolean;
};

export type Documents = SiteSettings | SitePage | Software;
