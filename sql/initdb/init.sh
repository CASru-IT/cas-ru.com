#!/bin/bash
set -e

export PGPASSWORD=$POSTGRES_PASSWORD

psql -f init.sql