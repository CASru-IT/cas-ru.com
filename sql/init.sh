#!/bin/bash
set -e

echo "Initializing database..."

# psqlコマンドを使用してSQLファイルを実行
psql -U "$POSTGRES_USER"  -f ../init.sql -v POSTGRES_PASSWORD="$POSTGRES_PASSWORD" -v POSTGRES_USER="$POSTGRES_USER" -v POSTGRES_DB="$POSTGRES_DB" > init.log 2>&1

echo "Database initialization completed. See init.log for details."
