$publishOnDist = $args[0]
$projectFolderName = Split-Path -Leaf (Get-Location)
$configFolder = ""

Write-Output "=========================================="
Write-Output "Welcome to the Angular project build tool!"
Write-Output "=========================================="


if ($publishOnDist -eq $true -Or -Not $publishOnDist) 
{
    Write-Output "Publishing on /dist folder"   
    Write-Output ""
    $configFolder = "\dist\"
    ng build --configuration production --base-href $projectFolderName

}else
{
    Write-Output "Publishing on /docs folder"    
    Write-Output ""
    $configFolder = "\docs\"
    ng build --configuration docs --base-href $projectFolderName
}


$buildPath = ""
$buildPathDestination = ""

#I generate different paths depending on the configuration
if($configFolder -eq "\docs\"){
    #For docs, the path is different than /dist path so there are two possible cases
    $buildPath = "."+$configFolder+"browser"
    $buildPathDestination = "."+$configFolder    

}else{
    $buildPath = "."+$configFolder+$projectFolderName+"\browser"
    $buildPathDestination ="."+$configFolder+$projectFolderName    
}

Write-Output $buildPath
Write-Output $buildPathDestination


$validPath = Test-Path -Path $buildPath


#If the project is build on /browser folder (angular version 17 or higher), we need to move the files and folders inside this folder in order to publish it correctly
if($validPath -eq $true) 
{       
    Write-Output "The project was built on /browser, moving content to parent directory"    
    Write-Output ""

    #I copy the items (I could move them, but in case there's an error the files will be there until they were deleted, just in case)
    Copy-Item -Path $buildPath"\*" -Destination $buildPathDestination -Recurse
    
    Write-Output "Content moved successfully, removing browser folder since it's not necessary anymore."    
    Write-Output ""

    #Once the items were copied, It's time to delete the browsers folder
    Remove-Item $buildPathDestination"\browser" -Recurse

    $date = Get-Date

    $gitMessage = "Publishing changes on Github Pages at " + $date

    git add --all    
    git commit -m $gitMessage    
    git push    
}

Pause
Clear-Host