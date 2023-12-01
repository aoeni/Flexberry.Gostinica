docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gostinica/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t gostinica/app ../..
