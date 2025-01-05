export const environment = {
  production: true,
  baseUrl: 'https://api.orsetto.ch/api', // eg:'https://your-marketplace.com/api'
  chatUrl: '<Your Chat base url>', // eg:'https://your-chaturl.com/'
  imageUrl: 'https://api.orsetto.ch/api/media/image-resize', // eg:'https://your-marketplace.com/api/media/image-resize'
  storeUrl : '<Your store base url>', // eg:'https://your-marketplace.com/'
  pluginUrl: '<Your API url>', // eg:'https://your-marketplace.com/'
  maxImage: 5, // 'Max image allowed only 5'
  filesize: 2048, // 'Max file size allowed only 2MB'
  imageType:/(\.jpg|\.jpeg|\.png)$/i, // 'Image types are only allowed'
  imageTypeSupport:"Please upload image only(.png,.jpg,.jpeg)", // 'Image types error message'
  imageSizeSupport: "Image should be less than 2MB", // 'Image size error message'
  imageSupportFile: "Support (.png .jpg .jpeg) Format & below 2MB Files allowed.", // 'Static message'
  logo: 'assets/images/orsetto logo.png', // 'Marketplace logo'
  documentSize: 4096,  // Allowed only 4mb document'
  documentType: /\.pdf$/, // Allowed pdf type document'
  documentMessage: 'Accept only .pdf extension', // Message for extension 
  imageSupportSize: "120 x 120px PNG or JPG file.", // 'Dimension' 

  footerCopyRight:{
    app:'footer.Orsettocommerce',  // footer description
    appVersion:'V5', // version
    appCopyRight:'footer.Copyrights' // copyright description 
  }
};
