for file in ./input/*; do 
    if [ -f "$file" ]; then 
        node index.js --filePath "$file"
        echo "Converted $file"
    fi
done