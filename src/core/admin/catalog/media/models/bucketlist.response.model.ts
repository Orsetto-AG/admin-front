/*
* orsettocommerce
* http://www.orsettocommerce.com
*
* Copyright (c) 2024  Orsetto Commerce E-solutions Private Limited
* Author Orsetto Commerce E-solutions Private Limited <support@orsettocommerce.com>
* Licensed under the MIT license.
*/
export class BucketlistResponseModel {
  public IsTruncated: boolean;
  public Marker: string;
  public NextMarker: string;
  public Contents: Array<BucketContentModel>;
  public Name: string;
  public Prefix: string;
  public Delimiter: string;
  public MaxKeys: string;
  public CommonPrefixes: Array<PrefixModel>;

  constructor(bucketlistResponse: any) {
    this.IsTruncated = bucketlistResponse.IsTruncated || false;
    this.Marker = bucketlistResponse.Marker || '';
    this.NextMarker = bucketlistResponse.NextMarker || '';
    this.Name = bucketlistResponse.Name || '';
    this.Prefix = bucketlistResponse.Prefix || '';
    this.Delimiter = bucketlistResponse.Delimiter || '';
    this.MaxKeys = bucketlistResponse.MaxKeys || '';
    this.Contents = bucketlistResponse.Contents;
    this.CommonPrefixes = bucketlistResponse.CommonPrefixes;
  }
}

export interface BucketContentModel {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: string;
  StorageClass: string;
  Owner: any;
}

export interface PrefixModel {
  Prefix: string;
}
