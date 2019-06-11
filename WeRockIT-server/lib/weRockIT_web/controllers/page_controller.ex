defmodule WeRockITWeb.PageController do
  use WeRockITWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
