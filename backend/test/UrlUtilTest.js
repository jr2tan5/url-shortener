require("chai").should();
const UrlUtil = require("../util/UrlUtil");

describe("This is a UrlUtil Functionality Test", () => {
  it('Append "http://" when http prefix is missing', () => {
    const url = "google.com";
    const result = UrlUtil.protocalAppender(url);
    result.should.equal("http://google.com");
  });

  it('Should not append "http://" when http prefix is present', () => {
    const url = "http://google.com";
    const result = UrlUtil.protocalAppender(url);
    result.should.equal(url);
  });
});
