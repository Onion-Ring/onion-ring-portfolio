$projectPath = $args[0]
$publishOnDist = $args[1]
$projectFolderName =  "/"+$args[2]+"/"
$configFolder = ""

Write-Output "=========================================="
Write-Output "Welcome to the Angular project build tool!"
Write-Output "=========================================="

$validPath = Test-Path -Path $projectPath

if ($validPath -eq $false)
{        
    Write-Output ""
    Write-Output "ERROR: " $projectPath "Is an invalid path, try again."
    Write-Output ""
    Exit
}

if(-Not $projectFolderName -Or $projectFolderName -eq "") 
{
    Write-Output ""
    Write-Output "ERROR: You should specify the project folder name."
    Write-Output ""
    Exit
}

Write-Output ""
Write-Output "The path provided was valid, changing location to:" $projectPath
Write-Output ""

Set-Location $projectPath

if ($publishOnDist -eq $true -Or -Not $publishOnDist) 
{
    Write-Output "Publishing on /dist folder"   
    Write-Output ""
    $configFolder = "\dist"
    ng build --configuration production --base-href $projectFolderName

}else
{
    Write-Output "Publishing on /docs folder"    
    Write-Output ""
    $configFolder = "\docs"
    ng build --configuration docs --base-href $projectFolderName
}


$buildPath = ""
$buildPathDestination = ""

#I generate different paths depending on the configuration
if($configFolder -eq "\docs"){
    #For docs, the path is different than /dist path so there are two possible cases
    $buildPath = $projectPath+$configFolder+"\browser"
    $buildPathDestination = $projectPath+$configFolder    

}else{
    $buildPath = $projectPath+$configFolder+$projectFolderName+"browser"
    $buildPathDestination = $projectPath+$configFolder+$projectFolderName
}

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