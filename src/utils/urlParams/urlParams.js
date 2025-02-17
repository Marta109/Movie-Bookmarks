class UrlParams {
  static addId(id) {
    const url = new URL(window.location);
    url.searchParams.set("movieId", id);
    window.history.pushState({}, "", url);
  }

  static removeId() {
    const url = new URL(window.location);
    url.searchParams.delete("movieId");
    window.history.replaceState({}, "", url);
  }

  static getId() {
    const url = new URL(window.location);
    return url.searchParams.get("movieId");
  }
}

export default UrlParams;
