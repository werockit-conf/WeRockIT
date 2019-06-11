defmodule WeRockIT.Repo do
  use Ecto.Repo,
    otp_app: :weRockIT,
    adapter: Ecto.Adapters.Postgres
end
