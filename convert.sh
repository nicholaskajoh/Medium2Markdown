for file in ./posts/*; do 
    if [ -f "$file" ]; then 
        echo "Converting $file to markdown..."
        node index.js --filePath "$file"
    fi 
done