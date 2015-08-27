defmodule PhoenixTones.PageController do
  use PhoenixTones.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
