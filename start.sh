#!/bin/bash
python3 buildData.py
bash aws_products_sync.sh
bash aws_products_data_sync.sh